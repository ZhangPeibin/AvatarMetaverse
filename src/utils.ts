import { AvatarStyleCount } from './const';
import { AvatarConfigBase, AvatarPart } from './types';

export const getRandomStyle = (): AvatarConfigBase => {
  const config = Object.keys(AvatarStyleCount).reduce(
    (prev, next) =>
      Object.assign(prev, {
        [next]: Math.floor(
          Math.random() * (AvatarStyleCount[next as AvatarPart] + 1),
        ),
      }),
    {} as Record<keyof AvatarConfigBase, number>,
  );
  // for harmony
  config.beard = 0;
  config.details = 0;
  config.accessories = 0;
  return config;
};

export function dataURItoBlob(dataURI: string) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  var ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  var blob = new Blob([ab], {type: mimeString});
  return blob;
}

// @ts-ignore
export function blobToFile(theBlob, fileName){
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
}
