import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  //접근제한자를 생성자 안에서 사용하면 클래스 프로퍼티로 선언된다, private 클래스 안에서만 사용하기위해
  constructor(private boardsService: BoardsService) {}
  //모든 게시물을 가져오는 요청을 서비스로
  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }
}
