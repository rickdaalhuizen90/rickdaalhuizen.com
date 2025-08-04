{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  buildInputs = with pkgs; [
    pnpm
    nodejs_24
    hugo
  ];
  shellHook = ''
    export PNPM_HOME="$HOME/.local/share/pnpm"
    export PATH="$PNPM_HOME:$PATH"
    export NODE_PATH=$PWD/node_modules:$NODE_PATH
  '';
}

