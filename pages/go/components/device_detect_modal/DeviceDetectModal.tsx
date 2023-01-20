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
               <div className='mb-16'>
                  <h3 className='text-[1.5rem] lg:text-[1.75rem]'>
                     Please set Safari as a default browser to use CHERRY.<br/><br/>
                     The application is not compatible with other browsers.
                  </h3>
               </div>
               <div>
                  <h5 className='text-[1.25rem]'>How to change your default web browser</h5>
                  <ol className='p-0'>
                     <li className='mt-2 flex text-[1rem]'>
                        <p className='mr-2'>1.</p>
                        <p>Go to Settings and scroll down until you find the browser app or the email app.</p>
                     </li>
                     <li className='mt-2 flex text-[1rem]'>
                        <p className='mr-2'>2.</p>
                        <p>Tap the app, then tap Default Browser App.</p>
                     </li>
                     <img className='my-4 w-3/4 mx-auto' alt='instruction' src={InstructionImg.src}/>
                     <li className='flex text-[1rem]'>
                        <p className='mr-2'>3.</p>
                        <p>Select <b>Safari</b> to set it as the default. A checkmark appears to confirm it's the default.</p>
                     </li>
                     <li className='flex text-[1rem]'>
                        <p className='mr-2'>4.</p>
                        <p>Return to <b>CHERRY</b> and click the link again.</p>
                     </li>
                  </ol>
               </div>
            </div>
         </ModalBody>
      </Modal>
   )
}

export default DeviceDetectModal;