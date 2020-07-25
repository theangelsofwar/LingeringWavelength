import React from 'react';
import { EmptyState, Layout, Page, TextStyle } from '@shopify/polaris';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
{/* <Page>
<p> Wavelength </p>

<TextStyle variation="positive"> Petrol </TextStyle>
</Page> */}
const Index = () => (
    <Page>
    <Layout>
        <EmptyState
            heading="Discount your products temporarily"
            action={{
                content: 'Select Products',
                onAction: () => console.log('clicked'),
            }}
            image={img}
        >
        <p> Select </p>
        </EmptyState>
    </Layout> 
    </Page>
);


export default Index;