import Navbar from "../../components/ui/navbar"
import Link from 'next/link'
import Image from 'next/image'
import Footer from "../../components/ui/footer"

const aiAgents = [
  {
    title: "Customer support",
    description: "Advanced language model that can help with conversations, writing, and problem-solving.",
    image: "https://imgs.search.brave.com/QbWV0FqACZbk6v7scE6AUufQeYUShOSZ7qbHDanHL4E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzk0LzEyLzA0/LzM2MF9GXzE5NDEy/MDQ5Ml8wZkdBWWpy/QXNKV3J5Q0NMY3Rl/TkM3dHdvNWFuaUVk/Wi5qcGc",
    link: "https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/30/02/20250330023613-DX96RLKK.json"
  },
  {
    title: "Web Master",
    description: "AI-powered tool that creates unique images from text descriptions.",
    image: "https://imgs.search.brave.com/fCIs2wCdSeHxHyV29PJ5pRBkhkSKy5BNpVQHwZsi-wU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzgzLzU4LzY0/LzM2MF9GXzgzNTg2/NDQ3X2tJOWp6bmJW/eEczcHV4Y1lBYmVP/QXhvejV5MHF5SlRa/LmpwZw",
    link: "https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/29/14/20250329143542-Z0E6HD7F.json"
  },
  {
    title: "Researcher",
    description: "AI that helps with code generation, debugging, and programming tasks.",
    image: "https://imgs.search.brave.com/5iSCFULjyEh0CQ92F2wPrhF8k0A03dwhGxuUjIevT3Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzk0LzAzLzI2/LzM2MF9GXzk0MDMy/NjcxX3BPYVRYOElo/Y09BVFFtM3U5bTdy/ZVhaemNNcjhIWDh4/LmpwZw",
    link: "/aiagents/code"
  },
  {
    title: "Crypto Master",
    description: "Intelligent agent that processes and analyzes complex data sets.",
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/29/14/20250329140014-ALZ155N9.json"
  },
  {
    title: "Fianance Master",
    description: "AI-powered voice recognition and synthesis system.",
    image: "https://imgs.search.brave.com/cT3btSNgIBoTcrkr1T1E5uakPyQXyTVvte05uzb4trI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5Lzk5LzU1Lzk3/LzM2MF9GXzk5OTU1/OTczNF9lRVZ5ZU43/eWVWMWRyV2EwYWFK/cWkwWmtpS0JXd2pz/ei5qcGc",
    link: "https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/29/11/20250329112047-E9LPE2LK.json"
  },
  {
    title: "Healthcare specialist",
    description: "Multi-language translation and interpretation assistant.",
    image: "https://images.unsplash.com/photo-1591311630200-ffa9120a540f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
    link: "https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/30/03/20250330031951-ZDDN5ML3.json"
  }
]

export default function AiAgentsPage() {
  return (
    <>
      <Navbar/>
      <div className="container px-4 py-16 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center">AI Agents</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aiAgents.map((agent, index) => (
            <Link href={agent.link} key={index}>
              <div className="overflow-hidden transition-all duration-300 bg-black text-white rounded-lg hover:bg-black hover:shadow-[0_20px_50px_rgba(255,255,255,0.15)] hover:-translate-y-2">
                <div className="relative w-full h-48">
                  <Image
                    src={agent.image}
                    alt={agent.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{agent.title}</h3>
                  <p className="mb-4 text-gray-400">{agent.description}</p>
                  <div className="flex items-center text-blue-400">
                    Chat now
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-lg text-center text-gray-400">More AI Agents coming soon!</p>
      </div>
      <Footer/>
    </>
  )
}
