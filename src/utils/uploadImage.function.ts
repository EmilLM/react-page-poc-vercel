import type { ImageUploadType } from '@react-page/plugins-image';


export const fakeImageUploadService: (url: string) => ImageUploadType =
  (defaultUrl) => (file, reportProgress) => {
    return new Promise((resolve, reject) => {
      let counter = 0;
      const interval = setInterval(() => {
        counter++;
        reportProgress(counter * 10);
        if (counter > 9) {
          clearInterval(interval);
          alert(
            'Image has not actually been uploaded to a server.'
          );
          resolve({ url: URL.createObjectURL(file) });
        }
      }, 100);
    });
  };

  