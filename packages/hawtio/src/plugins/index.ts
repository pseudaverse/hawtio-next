import { keycloak } from './auth/keycloak'
import { oidc } from './auth/oidc'
import { camel } from './camel'
import { connect } from './connect'
import { jmx } from './jmx'
import { logs } from './logs'
import { quartz } from './quartz'
import { rbac } from './rbac'
import { runtime } from './runtime'
import { springboot } from './springboot'
import { consoleStatus } from './console-status'

/**
 * Registers the builtin plugins for Hawtio React.
 *
 * The order of loading the builtin plugins is defined by this function.
 */
export const registerPlugins = () => {
  // Auth plugins should be loaded before other plugins
  keycloak()
  oidc()

  connect()
  jmx()
  rbac()
  camel()
  runtime()
  logs()
  quartz()
  springboot()
  consoleStatus()
}

// Export each plugin's entry point so that a custom console assembler can select which to bundle
export { camel, connect, jmx, keycloak, oidc, logs, quartz, rbac, runtime, springboot, consoleStatus }

// Common plugin API
export * from './connect'
export * from './context'
export * from './shared'
