import { Controller,Post,Body,Get,Param,Put,Delete,HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
        constructor(private readonly usersService: UsersService) { }
    
        @Post()
        async addUser(
            @Body('username') userUsername: string,
            @Body('email') userEmail: string,
            @Body('password') userPassword: string,
            @Body('admin') admin: Boolean,
        ) {

            if (admin===undefined) {
                admin = false;
            }

            const user = await this.usersService.insertUser(
                userUsername,
                userEmail,
                userPassword,
                admin,
            );
            return {
                statusCode: HttpStatus.OK,
                message: 'user added successfully',
                data: user,
            };
        }
    
        @Get()
        async getAllUsers() {
            const user = await this.usersService.getUsers();
            return user;
        }
    
        @Get(':id')
        getUser(@Param('id') userId: string) {
            return this.usersService.getSingleUser(userId);
        }
    
        @Put(':id')
        async updateUser(
            @Param('id') userId: string,
            @Body('username') userUsername: string,
            @Body('email') userEmail: string,
            @Body('password') userPassword: string,
            @Body('admin') admin: Boolean,
        ) {
            const user = await this.usersService.updateUser(
                userId,
                userUsername,
                userEmail,
                userPassword,
                admin,
            );
            return {
                statusCode: HttpStatus.OK,
                message: 'user updated successfully',
                user: user,
            };
        }
    
        @Delete(':id')
        async removeuser(@Param('id') userId: string) {
            const isDeleted = await this.usersService.deleteUser(userId);
            if (isDeleted) {
                return {
                    statusCode: HttpStatus.OK,
                    message: 'user deleted successfully',
                };
            }
        }
    }


