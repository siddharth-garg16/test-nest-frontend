import { Routes } from '@angular/router';

export const layoutRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout').then((c) => c.Layout),
    children: [
      {
        path: 'teacher',
        loadChildren: () =>
          import('../features/teacher/teacher.routes').then((r) => r.teacherRoutes),
      },
      {
        path: 'student',
        loadChildren: () =>
          import('../features/student/student.routes').then((r) => r.studentRoutes),
      },
      {
        path: 'admin',
        loadChildren: () => import('../features/admin/admin.routes').then((r) => r.adminRoutes),
      },
    ],
  },
];
