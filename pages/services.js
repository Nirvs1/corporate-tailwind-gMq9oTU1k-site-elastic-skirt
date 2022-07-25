import React from "react";
import { getProps } from "@builtjs/site";
import Error from "next/error";
import { withRouter } from "next/router";
import Banner1 from "@/templates/banners/banner-1/banner-1";
import Layout from "@/layout/layout";

const Page = (props) => {
  if (props.error) {
    return <Error statusCode={props.error.code} />
  }
  return (
    <><Layout headerContent={props.headerContent}  footerContent={props.footerContent} >
			 <Banner1 content={props.contactTeaserContent} />
			</Layout>
		</>
  );
};

export default withRouter(Page);

export async function getStaticProps() {
  let props = await getProps({pageSlug: 'service'});
  return {
    props: props,
    revalidate: 10
  };
}