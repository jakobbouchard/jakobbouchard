ARG VARIANT=18-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:${VARIANT}

# Reset GPG keys to use host ones
RUN \
	apt install -y gnupg2 \
	&& rm -rf /root/.gnupg

RUN \
	corepack enable \
	&& corepack prepare pnpm@7.12.2 --activate