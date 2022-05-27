import { NextPage } from 'next';

import { getPageStaticProps } from '@/core/get-page-props';

const DesignTokensPage: NextPage = () => (<div>Design tokens</div>);

export default DesignTokensPage;

export const getStaticProps = getPageStaticProps({
  layout: 'doc',
});