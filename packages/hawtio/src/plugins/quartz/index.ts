import { hawtio, type HawtioPlugin } from '@hawtiosrc/core'
import { helpRegistry } from '@hawtiosrc/help/registry'
import { pluginId, pluginPath } from './globals'
import help from './help.md'
import { quartzService } from './quartz-service'

const order = 15

export const quartz: HawtioPlugin = () => {
  hawtio.addDeferredPlugin(pluginId, async () => {
    return import('./ui').then(m => {
      return {
        id: pluginId,
        title: 'Quartz',
        path: pluginPath,
        order,
        component: m.Quartz,
        isActive: () => quartzService.isActive(),
      }
    })
  })

  helpRegistry.add(pluginId, 'Quartz', help, order)
}
