import React, { useState, useEffect } from 'react';
import Editor from '@react-page/editor';
import axios from 'axios';

import type { NextPage } from 'next'
import type { Options, Value } from '@react-page/editor';

import { cellPlugins } from '../src/plugins/cellPlugins';
import Layout from '../src/components/Layout/Layout';
import AdminBar from '../src/components/Layout/AdminBar';
import Templates from '../src/components/Layout/Templates'

const LANGUAGES: Options['languages'] = [
  {
    lang: 'en',
    label: 'English',
  },
  {
    lang: 'de',
    label: 'Deutsch',
  },
];

export default function Home({ template }: { template: Value }) {
  const [value, setValue] = useState<Value>(template);
  const [authorized] = useState<boolean>(true);

  const saveTemplate = async () => {
    await axios.put('/api/template', value);
  };

  const loadTemplate = () => {
    setValue(template)
  };

  const resetTemplate = () => setValue({});

  // autosave
  // useEffect(()=>{
  //   setInterval(()=> saveTemplate(), 1000 * 60 * 5);
  //   console.log('test')
  //   return () => clearInterval();
  // }, [value])

  return (
    <Layout>
      {
        authorized &&
        <AdminBar resetTemplate={resetTemplate} saveTemplate={saveTemplate}  >
          <Templates resetTemplate={resetTemplate} loadTemplate={loadTemplate} />
        </AdminBar>
      }
      <Editor
        cellPlugins={cellPlugins}
        value={value}
        onChange={setValue}
        lang={LANGUAGES[0].lang}
        languages={LANGUAGES}
        readOnly={!authorized}
      />
    </Layout>
  );
};

export async function getServerSideProps() {
  const template = await import('../template.json');
  return { props: { template: template.default } }
}