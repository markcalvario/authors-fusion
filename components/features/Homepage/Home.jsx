import React from "react";
import Navbar from './Navbar';
import CreateSource from './CreateSource';
import Source from './Source';
import SourcesList from './SourcesList';
import GlobalAuthorData from "../GlobalData/GlobalAuthorData";
import { authorFilter } from '../../../content/sources/author-service';

const AuthorswithData = GlobalAuthorData({
    source: "author-service",
    query: {},
    filter: authorFilter
})(SourcesList);


const Home = () =>{
  return (
    <div>
      <Navbar />
      <main>
          <CreateSource />
          <AuthorswithData />
      </main>
    </div>
  );
}

export default Home;