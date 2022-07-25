import React from "react";
import { getProps } from "@builtjs/site";
import Error from "next/error";
import { withRouter } from "next/router";
import SEO from "@/templates/head/seo/seo";
import Block2 from "@/templates/blocks/block-2/block-2";
import Cover5 from "@/templates/covers/cover-5/cover-5";
import Layout from "@/layout/layout";

const Page = (props) => {
  if (props.error) {
    return <Error statusCode={props.error.code} />
  }
  return (
     <>
	<SEO content={props.homeSeoContent} />
		<Layout headerContent={props.headerContent}  footerContent={props.footerContent} >
			 <Cover5 content={props.mainLandingContent} />
			 <Block2 content={props.aboutTeaserContent} />
			</Layout>
		</>
  );
};

export default withRouter(Page);

export async function getStaticProps() {
  let props = await getProps({pageSlug: 'home'});
  return {
    props: props,
    revalidate: 10
  };
}