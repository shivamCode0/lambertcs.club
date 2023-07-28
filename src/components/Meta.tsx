import React from "react";
import Head from "next/head";

export default function Meta({ title = "", description = "" }) {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} key="description" />}
    </Head>
  );
}
