'use client'
import { Board, BoardTop, BoardTopLive, BoardTopLiveFont, BoardTopLiveCount, BoardTopLivetime, TableContainer,
        Table, TableHead, TableBody, TableRow, TableHeaderCell, TableDataCell, TableFont, TableNumberFont} from './Board.styled'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
const BoardComponent = () => {
    const tableContainerRef = useRef(null);

    useEffect(() => {
        // 컴포넌트가 마운트되면 테이블 컨테이너의 스크롤을 아래로 이동
        scrollToBottom();
    }, []);

    const scrollToBottom = () => {
        if (tableContainerRef.current) {
        const container = tableContainerRef.current as HTMLDivElement;
        // 스크롤 높이를 테이블 컨테이너 높이로 설정하여 스크롤을 아래로 이동
        container.scrollTop = container.scrollHeight;
        }
    };
    return (
        <Board>
                    <BoardTop>
                        <BoardTopLive>
                            <BoardTopLiveFont>
                                실시간 당첨 현황
                            </BoardTopLiveFont>
                            <BoardTopLiveCount>
                                117
                            </BoardTopLiveCount>
                        </BoardTopLive>

                        <BoardTopLivetime>
                            2023.07.23 22:39 기준
                        </BoardTopLivetime>
                        <Image src="/refresh.png" alt="refresh" width={16} height={16}></Image>
                    </BoardTop>
                    
                    <TableContainer ref={tableContainerRef}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeaderCell><TableFont>설문일시</TableFont></TableHeaderCell>
                                    <TableHeaderCell><TableFont>이름</TableFont></TableHeaderCell>
                                    <TableHeaderCell><TableFont>리워드</TableFont></TableHeaderCell>
                                    <TableHeaderCell><TableFont>당첨여부</TableFont></TableHeaderCell>
                                </TableRow>
                            </TableHead>
                            
                            {/* 테이블 바디만 map 당첨 or 꽝 색 구분 */}
                            <TableBody>
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                            </TableBody>
        
                        </Table>
                    </TableContainer>
                </Board>
    )
}

export default BoardComponent