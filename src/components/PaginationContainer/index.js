import React,{useState,useEffect, useRef} from 'react';
import Style from './style';

export default (props)=>{
    const totalItems=props.totalItems !== undefined?props.totalItems:1;
    const itemsPerPage=props.itemsPerPage !== undefined?props.itemsPerPage:0;
    const [totalPagesArray,setTotalPagesArray]=useState([]);
    const [selectedPage,setSelectedPage]=useState(props.selectedPage);
    const [loading,setLoading]=useState(props.loading);

    useEffect(()=>{
        const makeLayoytPagination=()=>{
            setSelectedPage(props.selectedPage);
            setTotalPagesInArray();
        }

        makeLayoytPagination();
       
    },[props.selectedPage,props.loading]);

    const setTotalPagesInArray=()=>{
        let totalPagesResult=totalItems/itemsPerPage;
        let totalPagesArray=[];
        
        for (let index = 1; index <= totalPagesResult; index++) {
            let pageObject={
                number:index,
                active:false
            };

            totalPagesArray.push(pageObject);
        }
        
        let indexPage=selectedPage>0?(selectedPage-1):0;
        totalPagesArray[indexPage].active=true;
        setTotalPagesArray(totalPagesArray);
        let scrollPosition=indexPage*38;
        this._scrollView.scrollTo({x:scrollPosition});
        
    }
    
    const setPage=(number,index)=>{
        let pagesArray=[...totalPagesArray];
        pagesArray=clearSelectedMenu(pagesArray);
        pagesArray[index].active=true;
        setTotalPagesArray(pagesArray);
        setSelectedPage(index);
        props.setPageNumber(number);
        
    }

    const clearSelectedMenu=(pagesArray)=>{
        pagesArray.forEach((page)=>{
            page.active=false;
        });

        return pagesArray
    }

    return (
        <Style.Container>
            {!loading &&
                <Style.ContainerNumber 
                    horizontal={true}
                    ref={view => this._scrollView = view} >
                    {totalPagesArray.map((item,index)=>(
                        <Style.NumberPage key={index} active={item.active} onPress={()=>{setPage(item.number,index)}}>
                            <Style.NumberPageText active={item.active}>{item.number}</Style.NumberPageText>
                        </Style.NumberPage>
                    ))}
                </Style.ContainerNumber>
            }
        </Style.Container>
    )
}