import {
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Home,
  DollarSign,
} from "lucide-react";

export default function News() {
  const featuredNews = {
    title: "Housing Market Shows Strong Growth in Q4 2025",
    excerpt:
      "Property values continue to rise as demand outpaces supply in major metropolitan areas across the country.",
    image:
      "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "January 20, 2026",
    author: "Sarah Mitchell",
    category: "Market Trends",
  };

  const newsArticles = [
    {
      title: "Top 10 Neighborhoods for First-Time Homebuyers",
      excerpt:
        "Discover affordable and up-and-coming neighborhoods perfect for your first property purchase.",
      image:
        "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      date: "January 18, 2026",
      author: "Michael Chen",
      category: "Buying Guide",
    },
    {
      title: "Rental Market Analysis: What Landlords Need to Know",
      excerpt:
        "Understanding current rental trends and maximizing your investment property returns.",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fHww",
      date: "January 15, 2026",
      author: "Emily Rodriguez",
      category: "Rental Market",
    },
    {
      title: "Smart Home Features That Increase Property Value",
      excerpt:
        "Technology upgrades that buyers are willing to pay premium prices for in today's market.",
      image:
        "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdXNlfGVufDB8fDB8fHww",
      date: "January 12, 2026",
      author: "David Park",
      category: "Property Tips",
    },
    {
      title: "Commercial Real Estate: Office Space Transformation",
      excerpt:
        "How the hybrid work model is reshaping commercial property demands and opportunities.",
      image:
        "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fHww",
      date: "January 10, 2026",
      author: "Lisa Thompson",
      category: "Commercial",
    },
    {
      title: "Sustainable Living: Eco-Friendly Homes in Demand",
      excerpt:
        "Green building features and sustainable properties are commanding higher prices.",
      image:
        "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlfGVufDB8fDB8fHww",
      date: "January 8, 2026",
      author: "James Wilson",
      category: "Sustainability",
    },
    {
      title: "Investment Strategies for the Modern Real Estate Market",
      excerpt:
        "Expert advice on building wealth through strategic property investments in 2026.",
      image:
        "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdXNlfGVufDB8fDB8fHww",
      date: "January 5, 2026",
      author: "Amanda Foster",
      category: "Investment",
    },
    {
      title: "Top 10 Neighborhoods for First-Time Homebuyers in 2026",
      excerpt:
        "Discover affordable and up-and-coming neighborhoods perfect for your first property purchase with great potential for appreciation.",
      image:
        "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZpbGxhfGVufDB8fDB8fHww",
      date: "January 18, 2026",
      author: "Michael Chen",
      category: "Buying Guide",
      readTime: "4 min read",
    },
    {
      title: "Rental Market Analysis: What Landlords Need to Know",
      excerpt:
        "Understanding current rental trends and maximizing your investment property returns in today's competitive market.",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
      date: "January 15, 2026",
      author: "Emily Rodriguez",
      category: "Rental Market",
      readTime: "6 min read",
    },
    {
      title: "Smart Home Features That Increase Property Value",
      excerpt:
        "Technology upgrades that modern buyers are willing to pay premium prices for in today's tech-driven market.",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
      date: "January 12, 2026",
      author: "David Park",
      category: "Property Tips",
      readTime: "5 min read",
    },
    {
      title: "Commercial Real Estate: Office Space Transformation",
      excerpt:
        "How the hybrid work model is reshaping commercial property demands and creating new investment opportunities.",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
      date: "January 10, 2026",
      author: "Lisa Thompson",
      category: "Commercial",
      readTime: "7 min read",
    },
    {
      title: "Sustainable Living: Eco-Friendly Homes in High Demand",
      excerpt:
        "Green building features and sustainable properties are commanding higher prices as environmental consciousness grows.",
      image:
        "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
      date: "January 8, 2026",
      author: "James Wilson",
      category: "Sustainability",
      readTime: "5 min read",
    },
    {
      title: "Investment Strategies for the Modern Real Estate Market",
      excerpt:
        "Expert advice on building wealth through strategic property investments and portfolio diversification in 2026.",
      image:
        "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
      date: "January 5, 2026",
      author: "Amanda Foster",
      category: "Investment",
      readTime: "8 min read",
    },
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-sky-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Real Estate News & Insights
          </h1>
          <p className="text-xl text-blue-100">
            Stay informed with the latest market trends, tips, and expert
            analysis
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Article */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4 w-fit">
                  {featuredNews.category}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredNews.title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredNews.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredNews.date}</span>
                  <User className="w-4 h-4 mr-2" />
                  <span>{featuredNews.author}</span>
                </div>
                <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Read Full Article
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* News Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Latest Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {newsArticles.map((article, index) => (
                <div
                  key={index}
                  className=" bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <div className="h-[300px] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex-row w-full flex justify-between">
                      <div className="flex  items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span className="mr-3">{article.date}</span>
                        <User className="w-3 h-3 mr-1" />
                        <span>{article.author}</span>
                      </div>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
