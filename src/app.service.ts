import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hey there!';
  }
  getHello2(): {} {
    return {message: 'Hello People!', title: 'My Greeting App'};
  }
  getHome(): {} {
  return {title: 'Home Page'};
  }
  getAboutUs(): {} {
  return {title: 'About Us Page'};
  }
}
