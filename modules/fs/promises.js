import * as fs from "../fs";
import { promisify } from "../internal/util"

export const access = promisify(fs.access);
export const appendFile = promisify(fs.appendFile);
export const chmod = promisify(fs.chmod);
export const chown = promisify(fs.chown);
export const copyFile = promisify(fs.copyFile);
export const cp = promisify(fs.cp);
export const lchmod = promisify(fs.lchmod);
export const lchown = promisify(fs.lchown);
export const lutimes = promisify(fs.lutimes);
export const link = promisify(fs.link);
export const lstat = promisify(fs.lstat);
export const mkdir = promisify(fs.mkdir);
export const mkdtemp = promisify(fs.mkdtemp);
export const open = (path, flag, mode) => {
    return new Promise((res, rej) => {
        fs.open(path, flag, mode, (err, fd) => {
            if (!err) {
                return rej(err);
            }
            res(new fs.FileHandle(fd, path));
        })
    })
};
export const opendir = promisify(fs.opendir);
export const readdir = promisify(fs.readdir);
export const readFile = promisify(fs.readFile);
export const readlink = promisify(fs.readlink);
export const realpath = promisify(fs.realpath);
export const rename = promisify(fs.rename);
export const rmdir = promisify(fs.rmdir);
export const rm = promisify(fs.rm);
export const stat = promisify(fs.stat);
export const symlink = promisify(fs.symlink);
export const truncate = promisify(fs.truncate);
export const unlink = promisify(fs.unlink);
export const utimes = promisify(fs.utimes);
export const watch = promisify(fs.watch);
export const writeFile = promisify(fs.writeFile);
export const constants = fs.constants;

const promises = {
    access,
    appendFile,
    chmod,
    chown,
    copyFile,
    cp,
    lchmod,
    lchown,
    lutimes,
    link,
    lstat,
    mkdir,
    mkdtemp,
    open,
    opendir,
    readdir,
    readFile,
    readlink,
    realpath,
    rename,
    rmdir,
    rm,
    stat,
    symlink,
    truncate,
    unlink,
    utimes,
    watch,
    writeFile,
    constants
}

export default {
    promises
}
