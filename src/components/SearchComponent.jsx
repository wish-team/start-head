import { useState, useEffect } from 'react';
import { TextInput } from 'flowbite-react';

const SearchComponent = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    // Debounce the search input
    useEffect(() => {
        const handler = setTimeout(() => {
            onSearch(query);
        }, 300); // Adjust the debounce time as needed

        return () => {
            clearTimeout(handler);
        };
    }, [query, onSearch]);

    return (
        <div className="relative mb-6">
            <TextInput
                type="text"
                placeholder="Search partners..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border rounded-lg shadow-lg transition-all duration-300 focus:ring focus:ring-blue-500"
                style={{ color: '#000' }} // Light background for better visibility
            />
            <span className="absolute right-3 top-2 text-gray-400">
                <i className="fa fa-search"></i>
            </span>
        </div>
    );
};

export default SearchComponent;
