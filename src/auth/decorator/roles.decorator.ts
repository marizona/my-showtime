import { SetMetadata } from '@nestjs/common';

export const isAdmin = (isAdmin: boolean) => SetMetadata('admin', isAdmin);
