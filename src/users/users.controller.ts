import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  HttpStatus, UseGuards
} from "@nestjs/common";
import { UsersService } from './users.service';
import { User } from './users.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isAdmin } from "../auth/decorator/roles.decorator";
import { JwtAuthGuard } from "../auth/guards/jwt.guard";
import { AdminGuard } from "../auth/guards/admin.guard";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async addUser(
    @Body('username') userUsername: string,
    @Body('email') userEmail: string,
    @Body('password') userPassword: string,
    @Body('admin') admin: boolean,
  ) {
    if (admin === undefined) {
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

  @isAdmin(true)
  @UseGuards(JwtAuthGuard, AdminGuard)
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
    @Body('admin') admin: boolean,
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

  @Post('login')
  login(@Body() user: User): Observable<Object> {
    return this.usersService.login(user).pipe(
      map((jwt: string) => {
        return { access_token: jwt };
      }),
    );
  }
}
