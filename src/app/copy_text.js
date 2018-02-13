import $ from 'jquery';
import Clipboard from 'clipboard';

const copy_text = () => {
  $(() => {
      new Clipboard('.copy');
  });
}



export default copy_text
