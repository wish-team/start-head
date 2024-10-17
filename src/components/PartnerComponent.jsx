import React, { useEffect, useState } from 'react';
import { Spinner } from 'flowbite-react';
import SearchComponent from './SearchComponent'; // Ensure this path is correct

const PartnerComponent = () => {
  const [partners, setPartners] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Show 12 partners per page

  useEffect(() => {
    const fetchPartners = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxXcpGjZvf8Bd7zskmT7bJm5lP-Us12kigHiMwafBfGnBn8-v_TPqMAzGSZmurGddP9/exec');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setPartners(data);
      } catch (error) {
        setError('Failed to fetch partners');
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  // Debounced search term
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // Adjust the delay as necessary

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Filter partners based on the debounced search term
  const filteredPartners = partners.filter(partner =>
    partner.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastPartner = currentPage * itemsPerPage;
  const indexOfFirstPartner = indexOfLastPartner - itemsPerPage;
  const currentPartners = filteredPartners.slice(indexOfFirstPartner, indexOfLastPartner);
  const totalPages = Math.ceil(filteredPartners.length / itemsPerPage);

  // Function to highlight search term in partner names
  const highlightSearchTerm = (name) => {
    if (!debouncedSearchTerm) return name;
    const parts = name.split(new RegExp(`(${debouncedSearchTerm})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === debouncedSearchTerm.toLowerCase() ? (
        <span key={index} className="font-bold text-blue-600">{part}</span>
      ) : part
    );
  };

  return (
    <div className="partner-container w-[80%] mx-auto">
      <SearchComponent onSearch={setSearchTerm} />

      {loading ? (
        <div className="flex justify-center">
          <Spinner aria-label="Loading partners..." />
        </div>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentPartners.length > 0 ? (
            currentPartners.map((partner, index) => (
              <div key={index} className="p-4 rounded-lg bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 shadow-lg">
                <img src={partner.logo} alt={partner.name} className="h-16 mx-auto mb-2" />
                <p className="text-center">{highlightSearchTerm(partner.name)}</p>
              </div>
            ))
          ) : (
            <p>No partners found.</p>
          )}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-primary text-white rounded-lg disabled:opacity-50 focus:bg-primary-focus"
        >
          Previous
        </button>
        <span className="mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 bg-primary text-white rounded-lg disabled:opacity-50 focus:bg-primary-focus"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PartnerComponent;
