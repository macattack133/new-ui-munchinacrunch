// import React, { useState } from 'react';
// import NavigationBar from './NavigationBar';
//
//
// const YelpSearchPage = () => {
//   const [searchResults, setSearchResults] = useState([]);
//
//   const handleSearchResults = (results) => {
//     setSearchResults(results);
//   };
//
//   return (
//     <div>
//
//       <NavigationBar onSearchResults={handleSearchResults} />
//
//       <h2>Search Results</h2>
//       <ul>
//         {searchResults.map((business) => (
//           <li key={business.id}>
//             <h3>{business.name}</h3>
//             <p>{business.location.address1}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
//
// export default YelpSearchPage;