import os
from dotenv import load_dotenv
from langchain_core.prompts import PromptTemplate
from langchain_openai import AzureChatOpenAI
from langchain_core.output_parsers import JsonOutputParser
from typing import List, Dict, Any


class RAGService:
    def __init__(self):
        load_dotenv()
        self.api_key = os.getenv("AZURE_OPENAI_API_KEY")
        self.api_version = os.getenv("AZURE_OPENAI_API_VERSION")
        self.endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")
        self.deployment_name = os.getenv("AZURE_OPENAI_DEPLOYMENT_NAME")


    def get_chain(self):
        prompt = PromptTemplate(
            template="""
            You are an expert tech stack advisor. Your goal is to provide a tailored technology stack recommendation based on the project details provided.
            Analyze the user's requirements carefully and suggest a stack that is well-suited for their needs.
            
            Return your response as a JSON array where each object represents a technology category (Frontend, Backend, Database, etc.).
            Each category should contain a "type" field and a "tech" array with technology objects.
            Each technology object should have "name" and "description" fields.

            Here are the project details:
            - Project Type: {type}
            - Project Description: {description}
            - Required Features: {features}
            - Target Users: {target_users}
            - Developer Experience Level: {experience_level}
            - Preferences: {preferences}

            Based on this, please provide your tech stack recommendation in the following JSON format:
            [
              {{
                "type": "Frontend",
                "tech": [
                  {{
                    "name": "Technology Name",
                    "description": "Detailed explanation of why this technology is suitable for the project"
                  }}
                ]
              }},
              {{
                "type": "Backend", 
                "tech": [
                  {{
                    "name": "Technology Name",
                    "description": "Detailed explanation of why this technology is suitable for the project"
                  }}
                ]
              }},
              {{
                "type": "Additional Technologies",
                "tech": [
                  {{
                    "name": "Technology Name", 
                    "description": "Detailed explanation of why this additional technology is beneficial for the project"
                  }}
                ]
              }}
            ]

            Include relevant categories like Frontend, Backend, Database, Authentication, DevOps, etc. based on the project requirements.
            If there are any additional technologies, tools, or libraries that would enhance the project (like testing frameworks, deployment tools, monitoring solutions, etc.), group them under "Additional Technologies" category.
            """,
            input_variables=['type', 'description', 'features', 'target_users', 'experience_level', 'preferences']
        )


        llm = AzureChatOpenAI(
            api_key=self.api_key,
            azure_endpoint=self.endpoint,
            azure_deployment=self.deployment_name,
            api_version=self.api_version,
            temperature=0.7
        )
        
        chain = prompt | llm | JsonOutputParser()
        return chain

    def find_tech_stack(self, type: str, description: str, features: list[str], target_users: str, experience_level: str, preferences: str):
        chain = self.get_chain()
        result = chain.invoke({
            "type": type, 
            "description": description, 
            "features": ", ".join(features),
            "target_users": target_users, 
            "experience_level": experience_level,
            "preferences": preferences
        })

        return result
    

    def ping_models(self):
        llm = AzureChatOpenAI(
            api_key=self.api_key,
            azure_endpoint=self.endpoint,
            azure_deployment=self.deployment_name,
            api_version=self.api_version,
            temperature=0.7
        )
        return llm.invoke("What is javascript?")