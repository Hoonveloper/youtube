import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>FILTER</h2>
                
            </div>
            <hr/>
            <ChannelRow 
                image="https://yt3.ggpht.com/ytc/AAUvwngZECaFt0FDnf8kSk77EMU7sWbXjLa7_tkGmwpR2g=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="훈스트Hoonst"
                verified="True"
                subs="1,109,274,199"
                noOfVidieos={3,777}
                description="가짜 유튜브 채널입니다. 뭘 검색하든 이 페이지만 뜰거예요 다른 거 뜨면 100만원"
            />
            <hr/>
            <VideoRow 
                views="27만 회"
                subs="11억 명"
                description="[2021.02.09] 촬영영상 입니다.

                #뽑기​ #랜덤뽑기​
                
                ♥ GAMST YouTube channel subscribe please ♥"
                timestamp="4시간 전"
                channel="훈스트"
                title="감스트X훈스트 랜덤박스 뽑기 합방" 
                image="https://i.ytimg.com/vi/3VSrR4jXsPA/maxresdefault.jpg"
            />
            <VideoRow 
                views="27만 회"
                subs="11억 명"
                description="[2021.02.09] 촬영영상 입니다.

                #뽑기​ #랜덤뽑기​
                
                ♥ GAMST YouTube channel subscribe please ♥"
                timestamp="4시간 전"
                channel="훈스트"
                title="감스트X훈스트 랜덤박스 뽑기 합방" 
                image="https://i.ytimg.com/vi/3VSrR4jXsPA/maxresdefault.jpg"
            />
            <VideoRow 
                views="27만 회"
                subs="11억 명"
                description="[2021.02.09] 촬영영상 입니다.

                #뽑기​ #랜덤뽑기​
                
                ♥ GAMST YouTube channel subscribe please ♥"
                timestamp="4시간 전"
                channel="훈스트"
                title="감스트X훈스트 랜덤박스 뽑기 합방" 
                image="https://i.ytimg.com/vi/3VSrR4jXsPA/maxresdefault.jpg"
            />
            <VideoRow 
                views="27만 회"
                subs="11억 명"
                description="[2021.02.09] 촬영영상 입니다.

                #뽑기​ #랜덤뽑기​
                
                ♥ GAMST YouTube channel subscribe please ♥"
                timestamp="4시간 전"
                channel="훈스트"
                title="감스트X훈스트 랜덤박스 뽑기 합방" 
                image="https://i.ytimg.com/vi/3VSrR4jXsPA/maxresdefault.jpg"
            />
            <VideoRow 
                views="27만 회"
                subs="11억 명"
                description="[2021.02.09] 촬영영상 입니다.

                #뽑기​ #랜덤뽑기​
                
                ♥ GAMST YouTube channel subscribe please ♥"
                timestamp="4시간 전"
                channel="훈스트"
                title="감스트X훈스트 랜덤박스 뽑기 합방" 
                image="https://i.ytimg.com/vi/3VSrR4jXsPA/maxresdefault.jpg"
            />
            <VideoRow 
                views="27만 회"
                subs="11억 명"
                description="[2021.02.09] 촬영영상 입니다.

                #뽑기​ #랜덤뽑기​
                
                ♥ GAMST YouTube channel subscribe please ♥"
                timestamp="4시간 전"
                channel="훈스트"
                title="감스트X훈스트 랜덤박스 뽑기 합방" 
                image="https://i.ytimg.com/vi/3VSrR4jXsPA/maxresdefault.jpg"
            />
            
            
        </div>
    )
}

export default SearchPage
