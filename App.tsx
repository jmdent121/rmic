
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import OrderForm from './pages/OrderForm';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>(Page.Home);
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>();

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleOrderNow = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage(Page.Order);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home onNavigate={handleNavigate} />;
      case Page.Products:
        return <Products onOrderNow={handleOrderNow} />;
      case Page.Order:
        return <OrderForm initialProductId={selectedProductId} />;
      case Page.Contact:
        return <OrderForm />; // Reuse form for generic contact
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
