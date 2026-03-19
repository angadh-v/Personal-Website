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
			'Engineered a production-grade retrieval-augmented generation system using LangGraph to orchestrate multi-agent workflows for automated technical support querying.',
		organization: 'Retail Realm Distribution',
		dates: 'May 2025 - Aug 2025',
		stack: ['Python', 'LangGraph', 'PySpark', 'SQL Server', 'Azure Blob Storage'],
		impact:
			'Built scalable PySpark pipelines over historical ticket data and analyzed failure modes in LLM outputs to improve resolution efficiency by 35%.',
		links: [],
		featured: false,
		visibility: 'public-safe',
	},
	{
		title: 'Branch Network Geospatial Analysis',
		slug: 'branch-network-geospatial-analysis',
		category: 'industry',
		summary:
			'Conducted geospatial analysis using ArcGIS to visualize bank ATM networks and perform demographic catchment-area analysis for expansion and optimization decisions.',
		organization: 'Synechron',
		dates: 'Consulting project',
		stack: ['ArcGIS', 'Geospatial Analysis', 'Demographic Analysis'],
		impact:
			'Turned spatial and demographic signals into practical recommendations for ATM placement and network optimization.',
		links: [],
		featured: false,
		visibility: 'public-safe',
	},
	{
		title: 'Flight Collision Detection Layer',
		slug: 'flight-collision-detection-layer',
		category: 'industry',
		summary:
			'Processed high-throughput FlightRadar24 data to design and implement a geometry-based aircraft collision detection algorithm.',
		organization: 'IATA',
		dates: 'Consulting project',
		stack: ['Python', 'FlightRadar24 Data', 'Geometry', 'Safety Analytics'],
		impact:
			'Provided a ground-based safety layer for scenarios where onboard TCAS data is unavailable.',
		links: [],
		featured: false,
		visibility: 'public-safe',
	},
	{
		title: 'Farm Pond Causal Impact Analysis',
		slug: 'farm-pond-causal-impact-analysis',
		category: 'research',
		summary:
			'Investigated the causal impact of farm ponds on agricultural productivity using high-resolution satellite imagery processed through the Google Earth Engine Python API.',
		organization: 'Indian Institute of Technology Delhi',
		dates: 'Jun 2024 - Aug 2024',
		stack: ['Google Earth Engine', 'Python', 'Differences-in-Differences', 'Double Machine Learning'],
		impact:
			'Implemented counterfactual matching and analyzed treatment effects on soil moisture and vegetation indices, contributing to a paper presented at ACM COMPASS.',
		links: [],
		featured: false,
		visibility: 'public',
	},
	{
		title: 'Hate Speech Data Pipeline',
		slug: 'hate-speech-data-pipeline',
		category: 'research',
		summary:
			'Developed an ETL framework for aligning multilingual toxicity datasets and used an LLM for semantic schema matching across heterogeneous annotation labels.',
		organization: 'Prof. Reihaneh Rabbany, Mila',
		dates: 'Research project',
		stack: ['Python', 'ETL', 'LLMs', 'Parquet', 'Schema Matching'],
		impact:
			'Implemented a schema-validated Parquet pipeline that improved storage, retrieval, and reproducibility for future work in the Mila Complex Data Lab.',
		links: [],
		featured: false,
		visibility: 'public',
	},
	{
		title: 'Temporal Graph Neural Networks',
		slug: 'temporal-graph-neural-networks',
		category: 'research',
		summary:
			'Benchmarked a novel time-window-based training strategy to address temporal information loss in dynamic link prediction across multiple models and datasets.',
		organization: 'COMP 511 Project',
		dates: 'Course project',
		stack: ['PyTorch', 'Graph Neural Networks', 'Dynamic Link Prediction', 'Slurm', 'Compute Canada'],
		impact:
			'Ran ablation studies on Compute Canada HPC clusters and showed that sliding-window training improved link-prediction accuracy by up to 15% over batch baselines.',
		links: [],
		featured: false,
		visibility: 'public',
	},
	{
		title: 'Curriculum Learning in RL Environments',
		slug: 'curriculum-learning-in-rl-environments',
		category: 'research',
		summary:
			'Implemented a curriculum learning framework to train PPO agents in the Google Research Football environment, scaling task complexity from 1v1 to 11v11.',
		organization: 'COMP 579 Project',
		dates: 'Course project',
		stack: ['Reinforcement Learning', 'PPO', 'Google Research Football', 'Python'],
		impact:
			'Authored a short paper evaluating the trade-offs between sample efficiency and convergence stability for scheduled reward shaping versus task-based progression.',
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
		stack: ['Next.js', 'FastAPI', 'MySQL', 'Auth0', 'LangChain'],
		impact:
			'Combined product polish with practical AI workflows by enriching book metadata and handling fallback retrieval cleanly.',
		links: [{ label: 'Live site', href: 'https://bookflow-olive.vercel.app/', external: true }],
		featured: false,
		visibility: 'public',
	},
	{
		title: 'InsideRadar',
		slug: 'insideradar',
		category: 'personal',
		summary:
			'Built a full-stack web application that curates Polymarket trading data to identify and rank potentially insider-driven bets using residual analysis on an XGBoost model and a React frontend.',
		organization: 'McHacks Best Beginner Project',
		dates: '2025',
		stack: ['React', 'Polars', 'FastAPI', 'SQLAlchemy', 'XGBoost', 'Auth0'],
		impact:
			'Designed the data-science pipeline and backend architecture using Polymarket APIs, Polars, FastAPI, SQLAlchemy, and Auth0.',
		links: [],
		featured: false,
		visibility: 'public',
	},
	{
		title: 'Intelligent Credit Risk Portfolio Dashboard',
		slug: 'intelligent-credit-risk-portfolio-dashboard',
		category: 'personal',
		summary:
			'Designed an interactive credit risk dashboard around a predictive lending workflow, combining model outputs with KPI reporting for portfolio-level decision support.',
		organization: 'Personal project',
		dates: 'Course project',
		stack: ['Python', 'Scikit-learn', 'Power BI', 'DAX'],
		impact:
			'Modeled more than 100,000 LendingClub loan records and packaged the results into a business-facing dashboard.',
		links: [],
		featured: false,
		visibility: 'public',
	},
	{
		title: 'Chess Engine',
		slug: 'chess-engine',
		category: 'personal',
		summary:
			'Developed a two-player chess game in Java, implementing full game rules and turn-based logic through a modular object-oriented design.',
		organization: 'Personal project',
		dates: 'Course project',
		stack: ['Java', 'JavaFX', 'JUnit', 'Object-Oriented Design'],
		impact:
			'Built an interactive JavaFX GUI for board visualization and wrote JUnit tests to validate core game logic and edge cases.',
		links: [],
		featured: false,
		visibility: 'public',
	},
]

export const projectCategories: Array<{
	id: ProjectCategory
	label: string
	headline: string
	description: string
}> = [
	{
		id: 'industry',
		label: 'Industry',
		headline: 'Production-grade systems for real business constraints',
		description: '',
	},
	{
		id: 'research',
		label: 'Research',
		headline: 'Course and lab work across causal inference, graph learning, and reinforcement learning',
		description: '',
	},
	{
		id: 'personal',
		label: 'Personal',
		headline: 'Independent products and technical builds',
		description: '',
	},
]

export const experiences: ExperienceEntry[] = [
	{
		role: 'Software Developer Intern - Machine Learning',
		organization: 'Retail Realm Distribution',
		location: 'Sonoma, California (Remote)',
		dates: 'May 2025 - Aug 2025',
		summary:
			'Engineered a production-grade RAG system and supporting PySpark pipelines for automated technical support querying.',
		relatedProjectSlugs: ['support-intelligence-rag-platform'],
	},
	{
		role: 'Statistical Modelling Research Intern',
		organization: 'Indian Institute of Technology (IIT) Delhi',
		location: 'New Delhi, India',
		dates: 'Jun 2024 - Aug 2024',
		summary:
			'Studied the causal impact of farm ponds on agricultural productivity through high-resolution satellite imagery and modern causal ML methods.',
		relatedProjectSlugs: ['farm-pond-causal-impact-analysis'],
	},
	{
		role: 'Software Designer',
		organization: 'McGill Robotics Drone Team',
		location: 'Montreal, Canada',
		dates: 'Sept 2025 - Present',
		summary:
			'Designing embedded algorithms for real-time mapping, object recognition, and obstacle avoidance on NVIDIA Jetson for the SUAS competition.',
		relatedProjectSlugs: [],
	},
	{
		role: 'Co-coordinator, Rabbit Hole Kitchen',
		organization: 'The Yellow Door Org',
		location: 'Montreal, Canada',
		dates: 'Sept 2025 - Present',
		summary:
			'Overseeing the operations of a weekly community kitchen geared toward underprivileged students and seniors.',
		relatedProjectSlugs: [],
	},
	{
		role: 'Technical Project Manager, MAIS 202',
		organization: 'McGill AI Society',
		location: 'Montreal, Canada',
		dates: 'Oct 2024 - Apr 2025',
		summary:
			'Designed and graded machine learning assignments while providing technical guidance to more than 50 student participants.',
		relatedProjectSlugs: [],
	},
]

export const education: EducationEntry[] = [
	{
		school: 'McGill University',
		degree: 'Bachelor of Arts in Computer Science and Statistics',
		location: 'Montreal, Canada',
		dates: 'Jan 2022 - Apr 2026',
		description: 'Statistics and Computer Science student at McGill University.',
		honors: ["Dean's Honor List", 'Morris Wilson Renewable Scholarship'],
		coursework: [
			'Network Science',
			'Reinforcement Learning',
			'Applied Machine Learning',
			'Software Design',
			'Stochastic Processes',
			'Communication History',
		],
		researchInterests: [
			'AI for humanity',
			'Causal ML',
			'Bayesian methods',
			'Interpretability',
		],
	},
]

export const skillGroups: SkillGroup[] = [
	{
		title: 'Languages',
		items: ['Python', 'R', 'Java', 'SQL', 'C++', 'Bash', 'MATLAB'],
	},
	{
		title: 'ML and Data',
		items: ['PyTorch', 'PySpark', 'LangChain', 'Polars', 'Databricks', 'Scikit-learn', 'OpenCV'],
	},
	{
		title: 'Systems and Tools',
		items: ['Git', 'Docker', 'Linux', 'HPC (Slurm)', 'ArcGIS', 'Google Earth Engine', 'SQL Server'],
	},
]
