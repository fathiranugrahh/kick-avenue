import React from 'react';
import Image from 'next/image';

const TrendingSection = () => {
  const sneakers = [
    { id: 1, name: 'New Balance 530', image: '/images/sneakers1.png' },
    { id: 2, name: 'New Balance 2002R', image: '/images/sneakers2.png' },
    { id: 3, name: 'Adidas Ultraboost', image: '/images/sneakers3.png' },
    { id: 4, name: 'Adidas Gazelle', image: '/images/sneakers4.png' },
    { id: 5, name: 'Adidas Ultraboost 22', image: '/images/sneakers5.png' },
    { id: 6, name: 'New Balance 1906R', image: '/images/sneakers6.png' },
    { id: 7, name: 'Puma Suede', image: '/images/sneakers7.png' },
  ];

  const apparel = [
    { id: 1, name: 'Nike Swoosh Hoodie', image: '/images/hoodie1.png' },
    { id: 2, name: 'KICK AVENUE Tote Bag', image: '/images/hoodie2.png' },
    { id: 3, name: 'Pink Hoodie', image: '/images/hoodie3.png' },
    { id: 4, name: 'Tactical Vest', image: '/images/hoodie4.png' },
    { id: 5, name: 'Essentials Hoodie', image: '/images/hoodie5.png' },
    { id: 6, name: 'Black T-Shirt', image: '/images/hoodie6.png' },
    { id: 7, name: 'KICK T-Shirt', image: '/images/hoodie7.png' },
  ];

  const ProductCard = ({ product, showImage = true }: { product: { id: number; name: string; image: string }, showImage?: boolean }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div className="aspect-square bg-gray-50 rounded-t-lg relative overflow-hidden p-3">
        {showImage ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 14vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-gray-400 text-xs">{product.image}</span>
          </div>
        )}
      </div>
      <div className="p-2">
        <h3 className="text-xs font-medium text-gray-800 truncate leading-tight">{product.name}</h3>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-black tracking-wide">TRENDING</h2>
        <button className="text-gray-500 hover:text-black text-sm font-medium">
          View All
        </button>
      </div>

      {/* Sneakers Row */}
      <div className="mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {sneakers.map((sneaker) => (
            <ProductCard key={sneaker.id} product={sneaker} />
          ))}
        </div>
      </div>

      {/* Apparel Row */}
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {apparel.map((item) => (
            <ProductCard key={item.id} product={item} showImage={true} />
          ))}
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TrendingSection;
