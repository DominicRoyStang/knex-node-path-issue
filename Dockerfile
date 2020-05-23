FROM node:12.16.3-stretch

# Expose ports in the container
EXPOSE 3000

# Create service directory
RUN mkdir -p /example
WORKDIR /example

# Source run-time environment variables
ENV NODE_PATH=src

# Install dependencies
COPY package*.json ./
RUN npm install --no-progress

# Copy source code
COPY . .

# Set default command that is called when the container runs
CMD npm run db:migrate && npm run start
