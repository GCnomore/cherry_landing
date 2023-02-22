import React from 'react';
// import Policy from '../../public/assets/html/privacy_policy.html';
import fs from 'fs';
import path from 'path';
import Layout from '../../components/Layout';
import NavBar from '../../components/NavBar';

interface IPrivacyPolicy {
   htmlContent: string;
}

const PrivacyPolicy: React.FC<IPrivacyPolicy> = ({ htmlContent }) => {
   return (
      <Layout title='Privacy Policy'>
         <NavBar />
         <div className='py-8 px-32'>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
         </div>
      </Layout>
    )
}

export async function getStaticProps() {
   const filePath = path.join(process.cwd(), 'public', '/assets/html/privacy_policy.html');
   const htmlContent = fs.readFileSync(filePath, 'utf-8');
 
   return {
     props: {
       htmlContent,
     },
   };
}

export default PrivacyPolicy;