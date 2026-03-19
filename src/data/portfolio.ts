import type {
	ContactDetails,
	EducationEntry,
	ExperienceEntry,
	Project,
	ProjectCategory,
	SkillGroup,
} from '@/types/portfolio'

export const contact: ContactDetails = {
	email: 'angadh.verma@mail.mcgill.ca',
	phone: '579-957-1210',
	location: 'Montreal, Canada',
}

export const projects: Project[] = [
	{
		title: 'Support Intelligence RAG Platform',
		slug: 'support-intelligence-rag-platform',
		category: 'industry',
		summary:
			'Built a fully local retrieval workflow for technical support teams to search historical ticket data, surface likely resolutions, and keep sensitive support knowledge on internal infrastructure.',
		organization: 'Retail Realm Distribution',
		dates: 'May 2025 - Aug 2025',
		stack: ['Python', 'LangGraph', 'Azure Blob Storage', 'SQL Server', 'PySpark', 'ChromaDB'],
		impact:
			'Reduced average ticket resolution time by 35% through better retrieval quality and more grounded support responses.',
		links: [],
		featured: true,
		visibility: 'public-safe',
	},
	{
		title: 'Branch Network Geospatial Analysis',
		slug: 'branch-network-geospatial-analysis',
		category: 'industry',
		summary:
			'Used ArcGIS and statistical network analysis to map bank branch relationships, evaluate coverage gaps, and support ATM placement decisions for senior stakeholders.',
		organization: 'Synechron',
		dates: 'Consulting engagement',
		stack: ['ArcGIS', 'Geospatial Analysis', 'Statistical Modeling'],
		impact:
			'Turned spatial and network data into planning insight that could guide branch strategy and physical service coverage.',
		links: [],
		featured: false,
		visibility: 'public-safe',
	},
	{
		title: 'Flight Collision Detection Layer',
		slug: 'flight-collision-detection-layer',
		category: 'industry',
		summary:
			'Processed high-throughput FlightRadar24 data to construct a geometry-based aircraft collision detection algorithm for cases where onboard TCAS data is unavailable.',
		organization: 'IATA',
		dates: 'Consulting engagement',
		stack: ['Python', 'FlightRadar24 Data', 'Geometry', 'Safety Analytics'],
		impact:
			'Created a secondary analytical safety layer for collision awareness under degraded information conditions.',
		links: [],
		featured: false,
		visibility: 'public-safe',
	},
	{
		title: 'Intelligent Credit Risk Portfolio Dashboard',
		slug: 'intelligent-credit-risk-portfolio-dashboard',
		category: 'industry',
		summary:
			'Designed an interactive credit risk dashboard around a predictive lending workflow, combining model outputs with KPI reporting for portfolio-level decision support.',
		organization: 'Applied analytics project',
		dates: 'Project',
		stack: ['Python', 'Scikit-learn', 'Power BI', 'DAX'],
		impact:
			'Modeled more than 100,000 LendingClub loan records and packaged the results into a business-facing dashboard.',
		links: [],
		featured: false,
		visibility: 'public',
	},
	{
		title: 'Farm Pond Causal Impact Analysis',
		slug: 'farm-pond-causal-impact-analysis',
		category: 'research',
		summary:
			'Automated geospatial satellite workflows to study how farm ponds affect crop health and water security, combining image processing with causal inference methods.',
		organization: 'Indian Institute of Technology Delhi',
		dates: 'Jun 2024 - Aug 2024',
		stack: ['Google Earth Engine', 'Python', 'Differences-in-Differences', 'Double ML', 'Geospatial Analysis'],
		impact:
			'Contributed to a paper presented at ACM COMPASS by quantifying treatment effects across vegetation, soil moisture, and crop outcomes.',
		links: [],
		featured: true,
		visibility: 'public',
	},
	{
		title: 'Hate Speech Dataset Alignment Pipeline',
		slug: 'hate-speech-dataset-alignment-pipeline',
		category: 'research',
		summary:
			'Developed an ETL framework for aligning heterogeneous hate speech datasets and used LLM-based semantic matching to normalize annotation schemas across sources.',
		organization: 'Mila Complex Data Lab',
		dates: 'Research project',
		stack: ['ETL', 'LLMs', 'GPT-3.5', 'Schema Matching', 'Python'],
		impact:
			'Improved reproducibility for downstream research by turning inconsistent label taxonomies into a more unified dataset interface.',
		links: [],
		featured: false,
		visibility: 'public',
	},
	{
		title: 'BookFlow',
		slug: 'bookflow',
		category: 'personal',
		summary:
			'Built a full-stack library management product with role-based access control, a multi-state borrowing workflow, and an AI-powered search and metadata assistant.',
		organization: 'Personal project',
		dates: '2025',
		stack: ['Next.js', 'FastAPI', 'MySQL', 'Auth0', 'LangChain', 'Vercel', 'Render', 'Aiven'],
		impact:
			'Combined product polish with practical AI workflows by enriching book metadata and handling fallback retrieval paths cleanly.',
		links: [{ label: 'Live site', href: 'https://bookflow-olive.vercel.app/', external: true }],
		featured: true,
		visibility: 'public',
	},
	{
		title: 'InsideRadar',
		slug: 'insideradar',
		category: 'personal',
		summary:
			'Built a web application that streams and ranks live Polymarket data, using residual analysis and outlier detection to highlight potentially insider-driven bets.',
		organization: 'Personal project',
		dates: '2025',
		stack: ['Polars', 'FastAPI', 'SQLAlchemy', 'XGBoost', 'Auth0'],
		impact:
			'Designed the backend and modeling pipeline so real-time market data could be turned into a usable ranking signal for investigation.',
		links: [],
		featured: false,
		visibility: 'public',
	},
]

export const featuredProjects = projects.filter((project) => project.featured)

export const projectCategories: Array<{
	id: ProjectCategory
	label: string
	headline: string
	description: string
}> = [
	{
		id: 'industry',
		label: 'Industry',
		headline: 'Production-minded systems for real business constraints',
		description:
			'Projects shaped by business workflows, operational constraints, and public-safe summaries of measurable outcomes.',
	},
	{
		id: 'research',
		label: 'Research',
		headline: 'Empirical work with causal, geospatial, and dataset design depth',
		description:
			'Projects where data methodology matters as much as implementation, from remote sensing pipelines to reproducible schema alignment.',
	},
	{
		id: 'personal',
		label: 'Personal',
		headline: 'End-to-end products built from curiosity to shipped interface',
		description:
			'Independent builds that combine model logic, backend systems, and product thinking into complete experiences.',
	},
]

export const experiences: ExperienceEntry[] = [
	{
		role: 'Software Developer Intern, Machine Learning',
		organization: 'Retail Realm Distribution',
		location: 'Remote',
		dates: 'May 2025 - Aug 2025',
		summary:
			'Built production-facing retrieval and data infrastructure for support workflows, from storage and vector indexing to agentic answer generation.',
		relatedProjectSlugs: ['support-intelligence-rag-platform'],
	},
	{
		role: 'Statistical Modelling Research Intern',
		organization: 'Indian Institute of Technology Delhi',
		location: 'New Delhi, India',
		dates: 'Jun 2024 - Aug 2024',
		summary:
			'Studied the effect of farm ponds on crop outcomes using geospatial pipelines and causal inference techniques grounded in remote sensing data.',
		relatedProjectSlugs: ['farm-pond-causal-impact-analysis'],
	},
	{
		role: 'Software Designer',
		organization: 'McGill Robotics Drone Team',
		location: 'Montreal, Canada',
		dates: 'Sept 2025 - Present',
		summary:
			'Developing embedded algorithms for real-time mapping and object detection on an autonomous drone platform.',
		relatedProjectSlugs: [],
	},
	{
		role: 'Co-coordinator',
		organization: 'The Yellow Door',
		location: 'Montreal, Canada',
		dates: 'Sept 2025 - Present',
		summary:
			'Manage and cook for a weekly community kitchen serving underprivileged students and seniors.',
		relatedProjectSlugs: [],
	},
]

export const education: EducationEntry[] = [
	{
		school: 'McGill University',
		degree: 'Bachelor of Arts in Computer Science and Statistics',
		location: 'Montreal, Canada',
		dates: 'Jan 2022 - Apr 2026',
		description: "Dean's Honor List, GPA 3.85/4.00.",
	},
]

export const skillGroups: SkillGroup[] = [
	{
		title: 'Languages',
		items: ['Python', 'SQL', 'Java', 'R', 'JavaScript'],
	},
	{
		title: 'Data and ML',
		items: [
			'SQL Server',
			'PySpark',
			'Databricks',
			'Polars',
			'Pandas',
			'Scikit-learn',
			'PyTorch',
			'Keras',
			'LangChain',
			'LangGraph',
			'Ollama',
			'Vector DB',
			'Power BI',
			'Tableau',
		],
	},
	{
		title: 'Deployment',
		items: ['Git', 'Docker', 'Vercel', 'Render', 'Streamlit'],
	},
]
