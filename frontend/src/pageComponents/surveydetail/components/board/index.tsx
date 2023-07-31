'use client'
import { Board, BoardTop, BoardTopLive, BoardTopLiveFont, BoardTopLiveCount, BoardTopLivetime, TableContainer,
        Table, TableHead, TableBody, TableRow, TableHeaderCell, TableDataCell, TableFont, TableNumberFont} from './Board.styled'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
const BoardComponent = (props : any) => {
    const tableContainerRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, []);

    const scrollToBottom = () => {
        if (tableContainerRef.current) {
        const container = tableContainerRef.current as HTMLDivElement;
        container.scrollTop = container.scrollHeight;
        }
    };
    return (
        <Board>
            <BoardTop>
                <BoardTopLive>
                    <BoardTopLiveFont>
                        실시간 당첨 현황
                        {/* {props.type === {props.use} ? "실시간 당첨 현황":"실시간 추첨 현황"} */}
                    </BoardTopLiveFont>
                    <BoardTopLiveCount>
                        117
                    </BoardTopLiveCount>
                </BoardTopLive>

                <BoardTopLivetime>
                    2023.07.23 22:39 기준
                </BoardTopLivetime>
                <Image src="/refresh.png" alt="refresh" width={16} height={16} style={{cursor:'pointer'}}></Image>
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

                    <TableBody>
                        <TableRow use={props.type} result="꽝">
                            <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                            <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                            <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                            <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                        </TableRow>
                    
                        <TableRow use={props.type} result="당첨">
                            <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                            <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                            <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                            <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                        </TableRow>
                    
                        <TableRow use={props.type} result="당첨">
                            <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                            <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                            <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                            <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                        </TableRow>
                    
                        <TableRow use={props.type} result="당첨">
                            <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                            <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                            <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                            <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                        </TableRow>
                    
                        <TableRow use={props.type} result="당첨">
                            <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                            <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                            <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                            <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                        </TableRow>
                    
                        <TableRow use={props.type} result="당첨">
                            <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                            <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                            <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                            <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                        </TableRow>
                    
                        <TableRow use={props.type} result="당첨">
                            <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                            <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                            <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                            <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                        </TableRow>
                    
                        <TableRow use={props.type} result="꽝">
                            <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                            <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                            <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                            <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                        </TableRow>
                    
                        <TableRow use={props.type} result="꽝">
                            <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                            <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                            <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                            <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                        </TableRow>
                    
                        <TableRow use={props.type} result="꽝">
                            <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                            <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                            <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                            <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                        </TableRow>
                    
                        <TableRow use={props.type} result="당첨">
                            <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                            <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                            <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                            <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                        </TableRow>
                        
                        <TableRow use={props.type} result="당첨">
                            <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                            <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                            <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                            <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                        </TableRow>

                        <TableRow use={props.type} result="꽝">
                            <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                            <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                            <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                            <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                        </TableRow>
                        <TableRow use={props.type} result="당첨">
                            <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                            <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                            <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                            <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                        </TableRow>

                        <TableRow use={props.type} result="꽝">
                            <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                            <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                            <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                            <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                        </TableRow>
                        <TableRow use={props.type} result="당첨">
                            <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                            <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                            <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                            <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                        </TableRow>

                        <TableRow use={props.type} result="꽝">
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