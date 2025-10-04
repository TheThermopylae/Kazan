export default defineNuxtRouteMiddleware(to => {
  if (to.path !== '/' && to.path.endsWith('/')) {
    return navigateTo(to.path.replace(/\/+$/, ''), { redirectCode: 301 })
  }
})
