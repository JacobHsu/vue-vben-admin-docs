# router

`asyncRoutes`
router\routes\modules 定義頁面 router  
store\modules\permission.ts 調用router  
router\guard\index.ts setupRouterGuard呼叫store  
main.ts setupRouterGuard(router); 裝載  

main.ts

```js
import { router, setupRouter } from '/@/router';
async function bootstrap() {
  // Configure routing
  // vue-vite-admin/#/dashboard
  setupRouter(app); // basicRoutes (layouts\default\feature & PAGE_NOT_FOUND_ROUTE)

  // router-guard
  // vue-vite-admin/#/login?redirect=/dashboard by createPermissionGuard
  setupRouterGuard(router); // asyncRoutes (router\routes\modules)
```

## login

router\routes\index.ts

```js
export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/sys/login/Login.vue'),
  meta: {
    title: t('routes.basic.login'),
  },
};
```

router\guard\index.ts

```js
import { createPermissionGuard } from './permissionGuard';
export function setupRouterGuard(router: Router) {
   createPermissionGuard(router);
```

router\guard\permissionGuard.ts

```js
export function createPermissionGuard(router: Router) {
     // redirect login page
      const redirectData: { path: string; replace: boolean; query?: Recordable<string> } = {
        path: LOGIN_PATH, // '/login'
        replace: true,
      };
```

## routes

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

// 由 src\store\modules\permission.ts 呼叫
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

src\router\guard\permissionGuard.ts

```js
import { usePermissionStoreWithOut } from '/@/store/modules/permission';
const permissionStore = usePermissionStoreWithOut();

const routes = await permissionStore.buildRoutesAction();
```

router\guard\index.ts

```js
export function setupRouterGuard(router: Router) {
  createPermissionGuard(router); // Call Store permission.ts Call routes asyncRoutes
```