import { FC, useEffect, useRef, useState } from 'react';
import {
  Container,
  PlayBtn,
  VideoWrap,
  StyledReactPlayer,
  PauseBtn,
  MutedBtn,
} from './HeaderVideo.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { FaRegCirclePlay, FaPause } from 'react-icons/fa6';
import { IProps } from './HeaderVideo.types';
import Muted from '@/icons/general/muted.svg?react';

const HeaderVideo: FC<IProps> = ({ video }) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(true);
  const [muted, setMuted] = useState<boolean>(true);
  const [scale, setScale] = useState<number>(1);
  const videoWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollWidth = videoWrapRef.current?.scrollWidth;
    const scrollHeight = videoWrapRef.current?.scrollHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (scrollWidth && scrollHeight) {
      const widthScale = windowWidth / scrollWidth;
      const heightScale = windowHeight / scrollHeight;

      const scale = Math.max(widthScale, heightScale);

      setScale(scale);
    }
  }, [isReady]);

  const onPlayBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    setPlaying((prevState) => !prevState);
  };

  const onMutedBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    setMuted((prevState) => !prevState);
  };

  const onEnded = () => {
    setPlaying(false);
  };

  const onRead = () => {
    setIsReady(true);
  };

  return (
    <Container>
      <VideoWrap ref={videoWrapRef} playing={playing} scale={scale}>
        <StyledReactPlayer
          url={video}
          playing={playing}
          volume={1}
          muted={muted}
          onReady={onRead}
          onEnded={onEnded}
          width='100%'
          height='100%'
          playsinline
        />
      </VideoWrap>
      <PlayBtn type='button' onClick={onPlayBtnClick} playing={playing}>
        <FaRegCirclePlay size={120} />
      </PlayBtn>
      <PauseBtn type='button' onClick={onPlayBtnClick} playing={playing}>
        <FaPause size={60} />
      </PauseBtn>
      <MutedBtn type='button' onClick={onMutedBtnClick} playing={playing}>
        <Muted />
      </MutedBtn>
    </Container>
  );
};

export default HeaderVideo;
