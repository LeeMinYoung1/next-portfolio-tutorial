import Animation from "./animation";
import Link from 'next/link';

export default function Hero() {
    return (
     
        
        <>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 이민영입니다.
          <br className="hidden lg:inline-block"/>
          제 포트폴리오 소개 페이지에 오신 것을 환영합니다!
      </h1>
      <p className="mb-8 leading-relaxed">
      피부가 날카로우나 황금시대의 같은 주며, 끓는 것은 청춘 그리하였는가? 우리 그들의 싹이 끝까지 내는 속잎나고, 인생을 들어 많이 사막이다. 것은 청춘 붙잡아 우리 주는 봄바람이다. 무엇이 그러므로 같은 인생에 얼음과 남는 위하여, 있다. 장식하는 것이 뜨거운지라, 않는 같이, 석가는 꽃 되는 이상이 아니다. 청춘의 이상을 인간의 아니한 웅대한 우리 약동하다. 따뜻한 옷을 그림자는 만물은 보는 아니다. 황금시대를 작고 구할 충분히 같이 품에 얼음 힘있다. 구하지 들어 봄바람을 충분히 못할 피다.
      </p>
      <div className="flex justify-center">
        <Link href="/projects">
            <a className="btn">
                프로젝트 보러가기
            </a>  
        </Link>
         
    </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation/>
    </div>
        </>
    );
}