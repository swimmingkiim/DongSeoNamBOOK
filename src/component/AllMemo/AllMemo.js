import React, { useState, useEffect } from 'react';
import './AllMemo.scss';
import Title from '../Title';
import ProgressBar from '../ProgressBar';
import BookMemo from '../BookMemo';

const AllMemo = ({ match }) => {
    const title = match.params.bookName ? match.params.bookName : "ALL MEMO";
    const SampleMemoList = [
        {
            bookId: 1, 
            memoId: 1,
            bookName: "해리포터와 마법사의 돌",
            pageNum: 123,
            rowNum: 15,
            quote: "해그리드가 더들리의 엉덩이에서 돼지꼬리가 자라났다.",
            memo: "하지만 지금까지 출간된 책들은 J.K. 롤링이 펼쳐 나가는 판타지 세계의 규모가 어느 정도이며 그 속에 어떠한 소설적 장치를 심어 놓았는지 알 수 없는 상태에서 번역 작업이 이루어졌다. 또한 1~7편 모두 완결성을 갖추었지만, 시리즈의 특성상 편과 편을 이어 주며 작품 전체를 관통하는 서사의 개연성과 완결성은 마지막 편이 출간된 이후에나 파악할 수밖에 없었다. 그러다 보니 작가가 어느 장면에 복선을 깔아 두었고, 어느 장면이 작가가 창조한 세계관을 이해하는 중요한 역할을 하는지 의미를 파악하며 번역하기에는 한계가 있었다."
        }, 
        {
            bookId: 1, 
            memoId: 2,
            bookName: "해리포터와 마법사의 돌",
            pageNum: 123,
            rowNum: 15,
            quote: "해그리드가 더들리의 엉덩이에서 돼지꼬리가 자라났다.",
            memo: "20주년을 맞아 새롭게 출간한 <해리 포터> 시리즈는 ‘21세기 고전’이라 불릴 만한 품격에 맞춰 작품의 완성도를 높였다. 7권 <해리 포터와 죽음의 성물>로 완간된 기존의 <해리 포터> 시리즈는 빈틈없는 소설적 구성과 생생한 캐릭터 그리고 마법 세계를 정교하게 묘사하며 풍부한 상상력이 돋보이면서도 정밀한 세계관을 구축해 나갔다."
        }, 
        {
            bookId: 1, 
            memoId: 3,
            bookName: "해리포터와 마법사의 돌",
            pageNum: 123,
            rowNum: 15,
            quote: "해그리드가 더들리의 엉덩이에서 돼지꼬리가 자라났다.",
            memo: "이번에 선보이는 <해리 포터> 시리즈에는 J.K. 롤링이 작품 속에 이룩해놓은 문학적 성취가 완벽하게 구현되어 있다. 복선과 반전을 선사하는 문학적 장치들을 보다 정교하고 세련되게 다듬었으며, 인물들 사이의 관계나 그들의 숨겨진 비밀 그리고 성격이 도드라지는 말투의 미세한 뉘앙스까지 점검했다. <해리 포터>의 세계에 처음 발을 들여놓는 독자는 물론, 그동안 <해리 포터>의 세계를 즐겨 찾아왔던 독자 모두에게 완성도 높은 만족과 감동을 선사할 것이다."
        }
    ];

    useEffect(() => {
        if (window.location.pathname === "/DongSeoNamBOOK" || 
            window.location.pathname === "/DongSeoNamBOOK/") {
                document.getElementsByClassName("AllMemoWrapper")[0].classList.remove("bookMode");
        } else {
            document.getElementsByClassName("AllMemoWrapper")[0].classList.add("bookMode");
        } 
    }, []);

    return (
        <section className="AllMemoWrapper container">
            <Title title={title} />
            <ProgressBar ratio={80} />
            <div className="memoWrapper">
                {
                    SampleMemoList.map((eachMemo) => {
                        return (
                            <BookMemo memoInfo={eachMemo} />
                        );
                    })
                }
                <button className="addMemo">+</button>
            </div>
        </section>
    );
}

export default AllMemo;
