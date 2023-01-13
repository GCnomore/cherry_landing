import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import InstructionImg from '../../../../public/images/default_browser_instruction.png';
import { Modal, ModalBody} from 'react-bootstrap';

interface IDeviceDetectModal {
   show: boolean;
}

const DeviceDetectModal: React.FC<IDeviceDetectModal> = ({show}) => {

   return (
      <Modal size='lg' show={show} centered contentClassName='device-detect-modal-content'>
         <ModalBody>
            <div className='px-4 py-8'>
               <div className='mb-4'>
                  <h2>Please use the Safari browser to access Cherry as it is required for proper functionality.</h2>
                  <br/>
                  <h2>Please use Safari browser to access Cherry. The application is not compatible with other browsers.</h2>
               </div>
               <div>
                  <h3>How to change your default web browser</h3>
                  <ol className='p-0'>
                     <li className='mt-2'>1. Go to Settings and scroll down until you find the browser app or the email app.</li>
                     <li className='mt-2'>2. Tap the app, then tap Default Browser App or Default Mail App.</li>
                     <img className='my-4 w-3/4 mx-auto' alt='instruction' src={InstructionImg.src}/>
                     <li>3. Select <b>Safari</b> to set it as the default. A checkmark appears to confirm it's the default.</li>
                  </ol>
               </div>
            </div>
         </ModalBody>
      </Modal>
   )
}

export default DeviceDetectModal;