'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema } from './SchemaMarkup';

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
    const allItems = [{ name: 'Home', url: '/' }, ...items];
    const breadcrumbSchema = generateBreadcrumbSchema(allItems);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: breadcrumbSchema
                    }),
                }}
            />
            <nav
                className={`flex items-center space-x-2 text-sm ${className}`}
                aria-label="Breadcrumb"
            >
                <ol className="flex items-center space-x-2">
                    {allItems.map((item, index) => (
                        <li key={item.url} className="flex items-center">
                            {index > 0 && (
                                <ChevronRight className="w-4 h-4 text-charcoal/40 mx-2" />
                            )}
                            {index === allItems.length - 1 ? (
                                <span className="text-charcoal font-medium flex items-center">
                                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                                    {item.name}
                                </span>
                            ) : (
                                <Link
                                    href={item.url}
                                    className="text-charcoal/60 hover:text-gold transition-colors duration-200 flex items-center"
                                >
                                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}