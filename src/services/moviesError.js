const USER_MESSAGES = {
  network:
    "Parece que há um problema com a sua conexão. Verifique a internet e tente novamente.",
  rateLimit:
    "Muitas pessoas estão acessando agora. Aguarde um instante e tente novamente.",
  server:
    "O serviço de filmes está instável no momento. Tente novamente em instantes.",
  unknown: "Não foi possível carregar os filmes agora. Tente novamente.",
};

export const GENERIC_ERROR_MESSAGE = USER_MESSAGES.unknown;

export class MoviesError extends Error {
  constructor(kind, { status, cause } = {}) {
    super(`[fetchMovies] ${kind}${status ? ` (status ${status})` : ""}`, {
      cause,
    });
    this.name = "MoviesError";
    this.kind = kind;
    this.status = status;
    this.userMessage = USER_MESSAGES[kind] ?? GENERIC_ERROR_MESSAGE;
  }
}

export function getUserMessage(error) {
  return error instanceof MoviesError
    ? error.userMessage
    : GENERIC_ERROR_MESSAGE;
}

export function kindFromStatus(status) {
  if (status === 429) return "rateLimit";
  if (status >= 500) return "server";
  return "unknown";
}
