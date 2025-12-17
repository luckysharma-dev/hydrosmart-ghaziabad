import React from 'react';

const articles = [
    {
        id: 1,
        title: "New Subsidy Rules for 2025",
        category: "Government Policy",
        image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600&auto=format&fit=crop",
        readTime: "3 min read",
        summary: "The Nagar Nigam has updated the subsidy percentages for plot sizes above 200 sqm. Check if you are eligible."
    },
    {
        id: 2,
        title: "Top 5 Filters for Hard Water",
        category: "Technical Guide",
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=600&auto=format&fit=crop",
        readTime: "5 min read",
        summary: "Not all filters are created equal. We tested the top local brands available in Ghaziabad markets."
    },
    {
        id: 3,
        title: "Success Story: Raj Nagar Extension",
        category: "Community",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
        readTime: "2 min read",
        summary: "How one society saved 1 Lakh liters of water in just one monsoon season using our techniques."
    }
];

const KnowledgeHub = () => {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Section Header */}
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">Knowledge Hub 📚</h2>
                        <p className="text-gray-500 mt-2">Latest updates, guides, and stories from Ghaziabad.</p>
                    </div>
                    <button className="hidden md:block text-blue-600 font-bold hover:underline">
                        View All Articles →
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <div
                            key={article.id}
                            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                        >
                            {/* Image with Zoom Effect */}
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                                />
                                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {article.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center text-xs text-gray-400 mb-3 gap-2">
                                    <span>📅 Today</span>
                                    <span>•</span>
                                    <span>⏱️ {article.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-2">
                                    {article.summary}
                                </p>
                                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-blue-600 font-semibold text-sm">
                                    Read Article <span className="ml-2 group-hover:translate-x-1 transition">→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-8 text-center md:hidden">
                    <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-bold w-full">
                        View All Articles
                    </button>
                </div>

            </div>
        </div>
    );
};

export default KnowledgeHub;