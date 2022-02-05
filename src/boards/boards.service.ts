import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}
  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }
  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`게시글을 찾지 못헸습니다.`);
    }
    return found;
  }
  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('삭제할 데이터 없음 ');
    }
    console.log('result', result);
  }
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  // getBoardById(id: string): Board {
  // const found = this.boards.find((board)=> board.id ===id);
  // if(!found){
  //   throw new NotFoundException('글을 찾을수 없습니다');
  // }
  // return NotFoundException;
  // }
  // deleteBoard(id: string): void {
  //   this.boards = this.boards.filter((board) => board.id !== id);
  // }
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
