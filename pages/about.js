import React from "react";
import { getProps } from "@builtjs/site";
import Error from "next/error";
import { withRouter } from "next/router";
import SEO from "@/templates/head/seo/seo";
import Cover4 from "@/templates/covers/cover-4/cover-4";
import Layout from "@/layout/layout";

const Page = (props) => {
  if (props.error) {
    return <Error statusCode={props.error.code} />
  }
  return (
     <>
	<SEO content={props.aboutSeoContent} />
		<Layout headerContent={props.headerContent}  footerContent={props.footerContent} >
			 <Cover4 content={props.aboutLandingContent} />
			</Layout>
		</>
  );
};

export default withRouter(Page);

export async function getStaticProps() {
  let props = await getProps({pageSlug: 'about'});
  return {
    props: props,
    revalidate: 10
  };
}