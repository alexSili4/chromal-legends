import { FC, useRef, useState } from 'react';
import {
  Container,
  PlayBtn,
  VideoWrap,
  StyledReactPlayer,
  PauseBtn,
} from './HeaderVideo.styled';
import preview from '@/video/preview.mp4';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { FaRegCirclePlay, FaPause } from 'react-icons/fa6';

const HeaderVideo: FC = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLDivElement>(null);

  const onPlayBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    setPlaying((prevState) => !prevState);
  };

  return (
    <Container>
      <VideoWrap ref={videoRef} playing={playing}>
        <StyledReactPlayer
          url={preview}
          playing={playing}
          volume={1}
          muted={false}
          controls
        />
      </VideoWrap>
      <PlayBtn type='button' onClick={onPlayBtnClick} playing={playing}>
        <FaRegCirclePlay size={120} />
      </PlayBtn>
      <PauseBtn type='button' onClick={onPlayBtnClick} playing={playing}>
        <FaPause size={60} />
      </PauseBtn>
    </Container>
  );
};

export default HeaderVideo;
