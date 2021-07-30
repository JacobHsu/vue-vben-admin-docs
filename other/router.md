# router

main.ts

```js
import { router, setupRouter } from '/@/router';
async function bootstrap() {
  // Configure routing
  setupRouter(app);
```

router\index.ts

```js
import { basicRoutes } from './routes';
export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: basicRoutes as unknown as RouteRecordRaw[],
```

router\routes\index.ts

```js
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME, // redirect  '/dashboard'
  meta: {
    title: 'Root',
  },
};

// Basic routing without permission
export const basicRoutes = [RootRoute, ...mainOutRoutes, ...asyncRoutes];
```

將 router\routes\modules 下的文件檔案都進 RouteModule

```js
// Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块
const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [...routeModuleList];
```

`router\routes\modules\`dashboard.ts

```js
import HelloWorld from '/@/components/HelloWorld.vue';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: HelloWorld,
  meta: {
    icon: 'ion:grid-outline',
    title: 'routes.dashboard.dashboard',
  },
};

export default dashboard;
```
