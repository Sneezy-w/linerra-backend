import { execSync } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

const SERVICE_PATH = path.join(process.cwd(), 'backend', 'station');
const LAYER_PATH = path.join(SERVICE_PATH, '.layer', 'nodejs');
const TEMP_PATH = path.join(process.cwd(), '.temp-layer');
const CORE_PATH = path.join(process.cwd(), 'backend', 'core');

async function buildLayer() {
  // clean temp dir and create it
  await fs.rm(TEMP_PATH, { recursive: true, force: true });
  await fs.mkdir(TEMP_PATH, { recursive: true });

  // read service package.json
  const servicePkg = JSON.parse(
    await fs.readFile(path.join(SERVICE_PATH, 'package.json'), 'utf8'),
  );

  // create temp package.json
  const tempPkg = {
    dependencies: {},
  };

  // copy non @linerra and non @aws-sdk dependencies
  Object.entries(servicePkg.dependencies || {}).forEach(([name, version]) => {
    if (name !== '@linerra/core' && !name.startsWith('@aws-sdk/')) {
      tempPkg.dependencies[name] = version;
    }
  });

  // write temp package.json
  await fs.writeFile(
    path.join(TEMP_PATH, 'package.json'),
    JSON.stringify(tempPkg, null, 2),
  );

  // install dependencies in temp dir
  execSync('yarn install --production', {
    cwd: TEMP_PATH,
    stdio: 'inherit',
  });

  // clean and create layer dir
  await fs.rm(LAYER_PATH, { recursive: true, force: true });
  await fs.mkdir(LAYER_PATH, { recursive: true });

  // copy dependencies to layer dir
  await fs.cp(
    path.join(TEMP_PATH, 'node_modules'),
    path.join(LAYER_PATH, 'node_modules'),
    { recursive: true },
  );

  // copy core package to layer
  const layerCorePath = path.join(
    LAYER_PATH,
    'node_modules',
    '@linerra',
    'core',
  );
  await fs.mkdir(layerCorePath, { recursive: true });

  // copy core source code to layer
  await fs.cp(path.join(CORE_PATH, 'src'), path.join(layerCorePath, 'src'), {
    recursive: true,
  });

  // copy core package.json to layer
  const corePkg = JSON.parse(
    await fs.readFile(path.join(CORE_PATH, 'package.json'), 'utf8'),
  );

  // only keep core production dependencies
  const layerCorePkg = {
    name: corePkg.name,
    version: corePkg.version,
    type: corePkg.type,
    dependencies: {},
  };

  // only copy non @aws-sdk dependencies
  Object.entries(corePkg.dependencies || {}).forEach(([name, version]) => {
    if (!name.startsWith('@aws-sdk/')) {
      layerCorePkg.dependencies[name] = version;
    }
  });

  await fs.writeFile(
    path.join(layerCorePath, 'package.json'),
    JSON.stringify(layerCorePkg, null, 2),
  );

  // install core dependencies in core dir
  execSync('yarn install --production', {
    cwd: layerCorePath,
    stdio: 'inherit',
  });

  // clean temp dir
  await fs.rm(TEMP_PATH, { recursive: true });
}

buildLayer().catch(console.error);
