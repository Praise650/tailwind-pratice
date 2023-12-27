import React from 'react'

function ProfileImage({imgUrl, height, width}) {
  return (
    <img class="h-[40px] w-[40px] rounded-full" height={height} width={width} src={imgUrl??'https://placekitten.com/1400'} alt="Rounded avatar" />
  )
}

export default ProfileImage;